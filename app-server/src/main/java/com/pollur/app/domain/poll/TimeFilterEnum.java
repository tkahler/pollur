package com.pollur.app.domain.poll;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;

public enum TimeFilterEnum {
    DAY(1L),
    WEEK(7L),
    MONTH(30L),
    YEAR(365L);

    private final Long days;
    TimeFilterEnum(Long days) {
        this.days = days;
    }

    public OffsetDateTime getFilterDateTime() {
        return OffsetDateTime.now().minusDays(this.days);
    }

}
