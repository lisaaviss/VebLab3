package com.example.webLab3.bean;


import com.example.webLab3.entity.Point;
import com.example.webLab3.utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@ManagedBean(name = "pointsBean")
@ApplicationScoped
public class PointsBean implements Serializable {
    private Point point = new Point();
    private List<Point> points = new ArrayList<>();
    private Session session;


    public Point getPoint() {
        return point;
    }

    public void setPoint(Point point) {
        this.point = point;
    }

    public List<Point> getPoints() {
        return points;
    }

    public void setPoints(List<Point> points) {
        this.points = points;
    }

    public void addPoint(){
        long startTime  = System.nanoTime();
        point.checkPoint();
        point.setTimeOfSending( new SimpleDateFormat("HH:mm:ss").format(new Date()));
        point.setTimeOfExecuting(String.valueOf((System.nanoTime() - startTime) / 1000000d));
        points.add(point);

        addToDB();

        point = new Point(point.getX(), point.getY(), point.getR());
    }

    private void addToDB() {
        try{
            session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
            Transaction transaction = session.beginTransaction();
            session.save(point);
            transaction.commit();
            session.close();
        } catch (Exception e){
            e.printStackTrace();
        }

    }
}
