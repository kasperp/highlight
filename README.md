Highlight.js
============
Highlight is a jQuery plugin for highlighting text on a web page.

Usage
-----
You can use highlight like this

```html
..
<p>Alice was beginning to get very tired of sitting by her sister on the bank,
and of having nothing to do: once or twice she had peeped into the book her
sister was reading, but it had no pictures or conversations in it, 'and what
is the use of a book,' thought Alice 'without pictures or conversation?'</p>
<p>So she was considering in her own mind (as well as she could, for the hot
day made her feel very sleepy and stupid), whether the pleasure of making a
daisy-chain would be worth the trouble of getting up and picking the daisies,
when suddenly a White Rabbit with pink eyes ran close by her.</p>
<p>...</p>
...
<script>
$(function(){
	$('p').highlight( 'rabbit' )
})
</script>
```
Highlight.js will wrap word that matches the keyword in spans like e.g.

```html
<p>
...
 a White <span class="highlight">Rabbit</span> with
...
</p>
```
To remove highlights call highlight without any arguments `$('p').highlight()`.

The highlight css class can be change like this `$('p').highlight( {keyword:'rabbit', cssClass:'my-highlight'})`.

Demo
----
http://kasperp.github.com/highlight/
