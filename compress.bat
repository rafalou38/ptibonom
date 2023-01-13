ffmpeg -y -i .\src\static\2023\Compil.mp4 -movflags faststart .\src\static\2023\video.mp4


rm .\src\static\2018\video.mp4 
mv .\src\static\2018\video-b.mp4 .\src\static\2018\video.mp4 

rm .\src\static\2019\video.mp4 
mv .\src\static\2019\video-b.mp4 .\src\static\2019\video.mp4 

rm .\src\static\2020\video.mp4 
mv .\src\static\2020\video-b.mp4 .\src\static\2020\video.mp4 

rm .\src\static\2021\video.mp4 
mv .\src\static\2021\video-b.mp4 .\src\static\2021\video.mp4 