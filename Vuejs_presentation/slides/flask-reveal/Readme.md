# flask-reveal.js

flask-reveal.js is an python tool to help in organize reveal slides.

# Installation 

Install flask

## Usage

1. Create reveal slides pages apart like this: 

File : slide1.html
<section class="center"><h1>
    <b>This is my first slide</b></h1>
</section>

2. Copy this pages to templates/pages file.
3. Edit settings.yml Slides variable to your orded presentation like this:
```yaml
Run :
    debug : 1
Slides : ["slide1.html","slide2.html"]

```

4. Run python demo.py to run your presentation. 

# License
[MIT](https://choosealicense.com/licenses/mit/)