
#Timestamp Microservice API - FCC
By Greg Perlman

##User Stories:

>  1.  I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
>  2.  If it does, it returns both the Unix timestamp and the natural language form of that date.
>  3.  If it does not contain a date or Unix timestamp, it returns null for those properties.

## How to use:

Add a valid date or unix timestamp to the end of the query

<code>https://immense-brushlands-3354.herokuapp.com/January 10, 2015</code>
<br>
<code>https://immense-brushlands-3354.herokuapp.com/123416142134</code>

## Output:

<code>
  { "unix": 1450137600, "natural": "December 15, 2015" }
</code>


###Live Site:
