package com.pollur.app.domain.poll;

public enum SortByEnum {
    TOP("popularity"),
    NEW("createdDateTime");

    public String sortField;

    SortByEnum(String val) {
        this.sortField = val;
    }
}
