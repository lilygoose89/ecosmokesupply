# caliecosmokestaging
## Task 1 - Implementation of Global Settings for website

### Concept

Use Liquid tags to pull variable values from YAML file (settings.yml) in order to ensure changes on these variables result in site-wide changes

### Process

- On <code>style.css</code>, add empty Front Matter on the top of the file by creating 2 lines of '---' (three dashes): this will instruct Jekyll to process the file
- Create a <code>_data</code> folder and add a <code>settings.yml</code> file inside it: this will be the file that handles the variables. Add any key variables and values accordingly.
- Next, you must link the YAML file with the CSS by using Liquid tags directly in the CSS in place of variable values. Use <code>{{site.data.settings.name_of_variable}}</code> as tag and put them in the place where you would normally put the value for the variable.
- That's it! Jekyll will process the CSS file by pulling the values from the <code>settings.yml</code> file and create the CSS that the browser will render in the <code>_site/styles</code> folder.

### For site editors

When using CloudCannon, the <code>settings.yml</code> file will be rendered as a Datum file and available on the Explore view; all settings are readily editable on pleasant UI for editors.

## Task 2 - Toggling section display on/off

### Concept

Implementing a on/off function for displaying sections of a page whenever the content is ready for output by using Boolean variable (true/false)

### Process

- On <code>index.html</code> Front Matter, create a boolean variable: in this case, <code>add_testimonials: true</code>
- Create a <code>testimonials.html</code> file inside the <code>_includes</code> folder. Add markup as required.
- On <code>index.html</code>, add a IF statement on the section you wish to include the <code>testimonials.html</code> code whenever the challenge is met, like this:
<code>{% if page.add_testimonials == true %}
    {% include testimonials.html %}
  {% endif %}</code>
- Alternatively, you can also just place the whole <code>testimonial.html</code> code in-between the IF statement, but I find that it is tidier like this (change on the <code>_includes</code> file will affect all pages with testis).

### For site editors

When using CloudCannon, a checkbox will be visible allowing the editor to choose to display or hide the Testimonials section. When ticked, it will represent <code>add_testimonials: true</code> and when not ticked, <code>add_testimonials: false</code>
