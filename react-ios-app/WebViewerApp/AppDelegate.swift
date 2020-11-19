//
//  AppDelegate.swift
//  WebViewerApp
//
//  Created by Piyush Bharadwaj on 15/11/20.
//

import UIKit

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    
    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        
        window = UIWindow(frame: UIScreen.main.bounds)
        
        if let vc = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(identifier: "ViewController") as? ViewController {
            window?.rootViewController = vc
        }
        window?.makeKeyAndVisible()
        
        return true
    }
    
    var preferredStatusBarStyle: UIStatusBarStyle {
        return .lightContent
    }
    
    var prefersStatusBarHidden: Bool {
        return false
    }

}

