package com.reactnativegeotagging.fetchjson.model;



public class Location {
    private String name;
    private double lat;
    private double lng;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLng() {
        return lng;
    }

    public void setLng(double lng) {
        this.lng = lng;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append('{').append("\"name\": ").append(name).append("\"").append(',')
                .append("\"lat\": ").append(lat).append(',').append("\"lng\": ").append(lng).append('}');
        return sb.toString();
    }
}
