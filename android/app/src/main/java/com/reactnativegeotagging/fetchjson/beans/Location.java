package com.reactnativegeotagging.fetchjson.beans;



public class Location {
    String name;
    Double lat;
    Double lng;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getLat() {
        return lat;
    }

    public void setLat(Double lat) {
        this.lat = lat;
    }

    public Double getLng() {
        return lng;
    }

    public void setLng(Double lng) {
        this.lng = lng;
    }

    @Override
    public String toString() {
        return "{" + "\"name\": " + "\"" +  name + "\"" +  "," + "\"lat\": "  + lat  +  ","
                + "\"lng\": "  + lng  + "}";
    }
}
