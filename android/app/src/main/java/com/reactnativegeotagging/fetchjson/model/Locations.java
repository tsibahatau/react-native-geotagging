package com.reactnativegeotagging.fetchjson.model;

import java.util.List;


public class Locations {
    private String updated;
    private List<Location> locations;

    public List<Location> getLocations() {
        return locations;
    }

    public void setLocations(List<Location> locations) {
        this.locations = locations;
    }

    public String getUpdated() {

        return updated;
    }

    @Override
    public String toString() {
        StringBuilder locationsContent = new StringBuilder();
        locationsContent.append("[");
        for (Location loc : this.locations) {
            locationsContent.append(loc.toString() + ',');
        }
        locationsContent.deleteCharAt(locationsContent.length() - 1);
        locationsContent.append("]");
        return "{\"locations\": " + locationsContent +  "}";
    }

    public void setUpdated(String updated) {
        this.updated = updated;
    }
}
