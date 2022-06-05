package com.pollur.app.domain;

import java.time.LocalDateTime;

public enum TimeFilterEnum {
    DAY(1L),
    WEEK(7L),
    MONTH(30L),
    YEAR(365L);

    private final Long days;
    TimeFilterEnum(Long days) {
        this.days = days;
    }

    public LocalDateTime getFilterDateTime() {
        return LocalDateTime.now().minusDays(this.days);
    }

}
