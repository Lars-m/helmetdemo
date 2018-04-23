On Digital Ocean HPKP is setup in the configuration file for this app "/etc/nginx/sites-available/default

The key extracts are made using information found here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Public_Key_Pinning

### The first key pin is made using this command (the PIN for my certificate):

openssl s_client -servername securityheaders.mydemos.dk -connect www.example.com:443 | openssl x509 -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64

### The second key (backup) is made from the nearers parent in the certificate path (im not sure this is the right thing to do)
First the public key is exported (copy to file) via the browser, and then this command is used
openssl x509 -in cert.cer -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64


### This is what is added to nginx 

add_header Public-Key-Pins 'pin-sha256="X3pGTSOuJeEVw989IJ/cEtXUEmy52zs1TZQrU06KUKg=";pin-sha256="YLh1dUR9y6Kja30RrAn7JKnbQG/uEtLMkBgFF2Fuihg=";
          max-age=2592000,includeSubDomains';
          



