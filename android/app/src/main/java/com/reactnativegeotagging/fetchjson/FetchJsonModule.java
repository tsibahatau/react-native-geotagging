package com.reactnativegeotagging.fetchjson;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.reactnativegeotagging.fetchjson.beans.ApiService;
import com.reactnativegeotagging.fetchjson.beans.Location;
import com.reactnativegeotagging.fetchjson.beans.Locations;

import java.util.List;
import android.util.Log;
import retrofit2.Call;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class FetchJsonModule extends ReactContextBaseJavaModule {
    private static final String TAG = "FetchJson";

    public FetchJsonModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void fetchData(String url, final Callback successCallback, final Callback errorCallback) {
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(url)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        ApiService service = retrofit.create(ApiService.class);
        Call<Locations> call = service.getLocationsWrapper();

        call.enqueue(new retrofit2.Callback<Locations>() {
            @Override
            public void onResponse(Call<Locations> call, Response<Locations> response) {
                Log.w(TAG, "IMHERE");
                if (response.isSuccessful()) {
                    try {
                        Locations locations = response.body();
                        List<Location> locationList = locations.getLocations();
                        // RN doesn't allow us to transfer arbitrary data across bridge
                        //    so retrofit wasn't a good choice here
                        successCallback.invoke(locations.toString());
                    } catch (Exception e){
                        errorCallback.invoke("Error while parsing", e.getMessage());
                    }
                } else {
                    errorCallback.invoke("Error with server", response.message());
                }

            }

            @Override
            public void onFailure(Call<Locations> call, Throwable t) {
                errorCallback.invoke("Error with network", t.getMessage());
            }
        });
    }

    @Override
    public String getName() {
        return TAG;
    }
}