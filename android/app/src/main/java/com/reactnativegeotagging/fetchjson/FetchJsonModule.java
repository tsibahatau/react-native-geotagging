package com.reactnativegeotagging.fetchjson;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.reactnativegeotagging.fetchjson.model.ApiService;
import com.reactnativegeotagging.fetchjson.model.Locations;

import io.reactivex.Observable;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.functions.Consumer;
import io.reactivex.schedulers.Schedulers;
import retrofit2.Retrofit;
import retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory;
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
                .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
                .build();

        ApiService service = retrofit.create(ApiService.class);
        Observable<Locations> sydney = service.getLocationsWrapper();
        sydney.subscribeOn(Schedulers.newThread())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(new Consumer<Locations>() {
                    @Override
                    public void accept(Locations locations) throws Exception {
                        successCallback.invoke(locations.toString());

                    }
                }, new Consumer<Throwable>() {
                    @Override
                    public void accept(Throwable error) throws Exception {
                        errorCallback.invoke("Error with network", error.getMessage());                    }
                });
        }


    @Override
    public String getName() {
        return TAG;
    }


}