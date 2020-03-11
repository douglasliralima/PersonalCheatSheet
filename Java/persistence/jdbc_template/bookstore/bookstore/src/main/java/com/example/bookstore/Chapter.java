package com.example.bookstore;

public class Chapter {

    private String chapter;
    private Integer chapterNumber;

    public Chapter(String chapter, Integer chapterNumber) {
        this.chapter = chapter;
        this.chapterNumber = chapterNumber;
    }

    public String getChapter() {
        return chapter;
    }

    public void setChapter(String chapter) {
        this.chapter = chapter;
    }

    public Integer getChapterNumber() {
        return chapterNumber;
    }

    public void setChapterNumber(Integer chapterNumber) {
        this.chapterNumber = chapterNumber;
    }


}