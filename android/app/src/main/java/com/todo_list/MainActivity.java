package com.todo_list;
import android.os.Bundle;

import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends ReactActivity {

  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }

  @Override
  protected String getMainComponentName() {
    return "todo_list";
  }

  //   @Override
  // protected void onCreate(Bundle savedInstanceState) {
  //   super.onCreate(null);
  // }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate(){
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }
}
