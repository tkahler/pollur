package com.pollur.app.configuration;

import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;
import org.bouncycastle.util.io.pem.PemObject;
import org.bouncycastle.util.io.pem.PemReader;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.security.oauth2.server.resource.web.BearerTokenAuthenticationEntryPoint;
import org.springframework.security.oauth2.server.resource.web.access.BearerTokenAccessDeniedHandler;
import org.springframework.security.web.SecurityFilterChain;

import java.io.*;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;


@Configuration
public class WebSecurity {

    @Value("${jwt.public.key}")
    String publicKey;

    @Value("${jwt.private.key}")
    String privateKey;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http

                .authorizeHttpRequests((authorize) -> authorize
                        //unsecured api endpoints
                        .antMatchers(HttpMethod.POST,"/api/user").permitAll()
                        .antMatchers(HttpMethod.GET, "/api/poll/**").permitAll()
                        .antMatchers("/h2/**").permitAll()
                        //application entry point urls (returns index.html)
                        .antMatchers(HttpMethod.GET, "/").permitAll()
                        .antMatchers(HttpMethod.GET, "/discover").permitAll()
                        .antMatchers(HttpMethod.GET, "/create-poll").permitAll()
                        .antMatchers(HttpMethod.GET, "/user").permitAll()
                        //allow static content
                        .antMatchers(HttpMethod.GET, "/*.js", "/images/**", "/favicon.ico", "/*.ttf", "/*.woff2").permitAll()
                        .anyRequest().authenticated()
                )
                .csrf().disable()
                .httpBasic(Customizer.withDefaults())
                .oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt)
                .sessionManagement((session) -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .exceptionHandling((exceptions) -> exceptions
                        .authenticationEntryPoint(new BearerTokenAuthenticationEntryPoint())
                        .accessDeniedHandler(new BearerTokenAccessDeniedHandler())
                );
        http.headers().frameOptions().disable();

        return http.build();
    }

    @Bean
    JwtDecoder jwtDecoder() throws InvalidKeySpecException, NoSuchAlgorithmException {

        return NimbusJwtDecoder.withPublicKey(this.getPublicKey()).build();
    }

    @Bean
    JwtEncoder jwtEncoder() throws NoSuchAlgorithmException, InvalidKeySpecException, IOException {

        JWK jwk = new RSAKey.Builder(this.getPublicKey()).privateKey(this.getPrivateKey()).build();
        JWKSource<SecurityContext> jwks = new ImmutableJWKSet<>(new JWKSet(jwk));

        return new NimbusJwtEncoder(jwks);
    }

    private RSAPrivateKey getPrivateKey() throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
        String privateKeySTr = new String(this.keyToBytes(new File(this.privateKey)));

        PemObject pem = new PemReader(new StringReader(privateKeySTr)).readPemObject();
        byte[] der = pem.getContent();
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        PKCS8EncodedKeySpec ks = new PKCS8EncodedKeySpec(der);
        RSAPrivateKey privKey = (RSAPrivateKey) keyFactory.generatePrivate(ks);
        return privKey;
    }

    private RSAPublicKey getPublicKey() throws InvalidKeySpecException, NoSuchAlgorithmException {
        // read public key DER file
        byte[] pubKeyBytes = this.keyToBytes(new File(this.publicKey));
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");

        String temp = new String(pubKeyBytes);
        String publicKeyPEM = temp.replace("-----BEGIN PUBLIC KEY-----\n", "");
        publicKeyPEM = publicKeyPEM.replace("-----END PUBLIC KEY-----", "").trim();


        // decode public key
        X509EncodedKeySpec pubSpec = new X509EncodedKeySpec(Base64.getMimeDecoder().decode(publicKeyPEM));
        RSAPublicKey pubKey = (RSAPublicKey) keyFactory.generatePublic(pubSpec);
        return pubKey;
    }



    private byte[] keyToBytes(File keyFile) {
        byte[] keyBytes = null;
        try {
            DataInputStream dis = new DataInputStream(new FileInputStream(keyFile));
            keyBytes = new byte[(int)keyFile.length()];
            dis.readFully(keyBytes);
            dis.close();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return keyBytes;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(10);
    }

}