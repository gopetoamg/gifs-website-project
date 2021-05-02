export const toGifDetailed = (gif) => `
<div id="detailed-gif-container">
<h1> ${gif.title} </h1>
<img src="${gif.images.original.url}" width="300" height="300">
<div class = "text-block-detailed">
<p> Uploaded on: ${gif.import_datetime}
<p> Uploaded by: ${gif.username}. <p>
<p> Rating: ${gif.rating}. <p> 
<p> URL: <p>
<p><a class="" data-id="" href="#">${gif.url}. </a><p>
</div> 
<button type="button" class="go-back"> Go back</button>
</div>
`;
