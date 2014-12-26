echo "{"
echo \"expprogram\": \"`gphoto2 --get-config /main/capturesettings/expprogram | grep Current | sed s/Current:\ //g`\",
echo \"capturemode\": \"`gphoto2 --get-config /main/capturesettings/capturemode | grep Current | sed s/Current:\ //g`\",
echo \"exposuremetermode\": \"`gphoto2 --get-config /main/capturesettings/exposuremetermode | grep Current | sed s/Current:\ //g`\",
echo \"iso\": \"`gphoto2 --get-config /main/imgsettings/iso | grep Current | sed s/Current:\ //g`\",
echo \"imagesize\": \"`gphoto2 --get-config /main/imgsettings/imagesize | grep Current | sed s/Current:\ //g`,
echo \"fnumber\": \"`gphoto2 --get-config /main/capturesettings/f-number | grep Current | sed s/Current:\ //g`\",
echo \"shutterspeed\": \"`gphoto2 --get-config /main/capturesettings/shutterspeed | grep Current | sed s/Current:\ //g`\"
echo "}"
