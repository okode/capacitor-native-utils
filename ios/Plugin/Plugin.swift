import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(NativeUtils)
public class NativeUtils: CAPPlugin {
    
    @objc func isProtectedDataAvailable(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            let isProtectedDataAvailable = UIApplication.shared.isProtectedDataAvailable
            call.success([ "value": isProtectedDataAvailable ])
        }
    }
    
}
