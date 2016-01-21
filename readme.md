## Create module
- <http://slides.com/linclark/webpack#/31>
```
~/app $ mv components/dep ../
~/app $ cd ../dep
~/dep $ npm init
~/dep $ npm link
~/dep $ cd ../app
~/app $ npm link dep
```
