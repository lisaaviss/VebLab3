package com.example.webLab3.entity;

import javax.persistence.*;

@Entity
@Table(name = "mypoints")
public class Point {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private double x;
    private double y;
    private double r;
    private boolean result;
    @Column(name = "timeofsending")
    private String timeOfSending;
    @Column(name = "timeofexecuting")
    private String timeOfExecuting;


    public Point(double x, double y, double r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    public Point() {
    }

    public void checkPoint() {
        double x = this.x;
        double y = this.y;
        double r = this.r;
        this.result = (x >= -r && x <= 0 && y <= 0 && y >= -r) || //rect
                (x * x + y * y <= r * r && x <= 0 && y >= 0) || //arc
                (y >= 0.5*x - r/2 && y <= 0 && y >= -r/2 && x >= 0 && x <= r); //triangle
    }

    public boolean isResult() {
        return result;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public String getTimeOfSending() {
        return timeOfSending;
    }

    public String getTimeOfExecuting() {
        return timeOfExecuting;
    }

    public void setTimeOfExecuting(String timeOfExecuting) {
        this.timeOfExecuting = timeOfExecuting;
    }

    public void setX(double x) {
        this.x = x;
    }

    public void setY(double y) {
        this.y = y;
    }

    public void setR(double r) {
        this.r = r;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public void setTimeOfSending(String timeOfSending) {
        this.timeOfSending = timeOfSending;
    }
}
