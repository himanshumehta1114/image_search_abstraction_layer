# Author
![@himanshumehta1114](https://avatars2.githubusercontent.com/himanshumehta1114?&s=128)

created by himanshu mehta.
[Github](https://github.com/himanshumehta1114) | [FreeCodeCamp](http://www.freecodecamp.com/himanshumehta1114) | [CodePen](http://codepen.io/himanshumehta1114/) | [LinkedIn](https://www.linkedin.com/in/himanshumehta1114)

# FreeCodeCamp API Basejump: Image search abstration layer
### How it works:
 1) You can get the image URLs, alt text and page urls for a set of images relating to a given search string.
 2) You can paginate through the responses by adding a ?offset=2 parameter to the URL.
 3) I can get a list of the most recently submitted search strings.

## Example usage:

```url
https://floating-lowlands-28482.herokuapp.com/imagesearch/lolcats?count=1
```

## Example output:

```json
{
"name": "Photography: LOLCats - My Planet Needs Me",
"thumbnail": "https://tse1.mm.bing.net/th?id=OIP.ZZN8NTD5vmNOiooSNt2LSwHaEm&pid=Api",
"url": "http://2.bp.blogspot.com/-UTfReaVIzog/UZkV6aGRjdI/AAAAAAAAIN0/84CcNBRrPco/s1600/LOLCats-lol-cats-52.jpg",
"context": "http://photography-galleries.blogspot.com/2013/05/lolcats-my-planet-needs-me.html"
}
```
