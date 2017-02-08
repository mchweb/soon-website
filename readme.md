# Simple web page to collect customers emails before main website launch
Open src/index.html and replace next placeholders with your data
$WEBSITE — url of your domain
$COMPANY — brand
$TITLE — brand description
$DESCRIPTION — meta description
$INSTAGRAM — instagram account (only name)
$VK — vk page (without http://vk.com)
$EMAIL — admin email
$METRIKA — tracking codes like Yandex.Metrkia

Open src/send.php and replace
$TABLE — create google form to store data from this example -- https://docs.google.com/forms/d/1_HCSApNq6qoKzPsNJ9DI_TOwtz8thyf9CvxnhiCwVbk (ask for permissions)

And update graphics
src/favicon.ico
src/assets/img/logo_white.svg
src/assets/img/back.jpg
src/assets/img/og.jpg

Then run grunt default task and put the content of /build/ to your webserver public directory