
  Pod::Spec.new do |s|
    s.name = 'CapacitorNativeUtils'
    s.version = '0.0.1'
    s.summary = 'Capacitor plugin which provides a set of native utils'
    s.license = 'MIT'
    s.homepage = 'https://github.com/okode/capacitor-native-utils'
    s.author = 'Okode'
    s.source = { :git => 'https://github.com/okode/capacitor-native-utils', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end