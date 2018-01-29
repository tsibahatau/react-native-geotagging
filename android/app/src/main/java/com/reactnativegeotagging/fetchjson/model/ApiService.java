package com.reactnativegeotagging.fetchjson.model;



import io.reactivex.Observable;
import retrofit2.http.GET;

public interface ApiService {
    @GET("locations.json")
    Observable<Locations> getLocationsWrapper();
}
