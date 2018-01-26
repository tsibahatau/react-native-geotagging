package com.reactnativegeotagging.fetchjson.beans;



import retrofit2.Call;
import retrofit2.http.GET;

public interface ApiService {
    @GET("locations.json")
    Call<Locations> getLocationsWrapper();
}
