
#Timestamp Microservice API - FCC
By Greg Perlman

##User Stories:

>  1.  I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
>  2.  If it does, it returns both the Unix timestamp and the natural language form of that date.
>  3.  If it does not contain a date or Unix timestamp, it returns null for those properties.

## How to use:

Add a valid date or unix timestamp to the end of the query

<code>https://guarded-dusk-38636.herokuapp.com/May 5, 2015</code>
<br>
<code>https://guarded-dusk-38636.herokuapp.com/1430784000</code>

## Output:

<code>
  { "date":"May 05, 2015", "unix":"1430784000" }
</code>


###Live Site:

https://guarded-dusk-38636.herokuapp.com/
