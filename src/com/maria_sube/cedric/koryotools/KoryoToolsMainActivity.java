package com.maria_sube.cedric.koryotools;

import org.apache.cordova.DroidGap;

import android.os.Bundle;

public class KoryoToolsMainActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/splashScreen.html");
    }    
}
