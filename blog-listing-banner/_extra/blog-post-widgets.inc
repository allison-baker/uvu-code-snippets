<section>
	<div class="row">
		<div class="post-details col-sm-12">
			<div class="blog" data-blog-preset="post-meta">&nbsp;</div>
			<div class="blog" data-blog-preset="post-tags">&nbsp;</div>
			<div class="blog" data-blog-preset="post-related">&nbsp;</div>
		</div>

		<!-- disqus output -->
		<div class="col-sm-12">
			<div id="disqus_thread"></div>
		</div>	
	</div>
</section>

<!-- disqus script -->

<script>
	$(function(){
		var shortname = ''; // change this to your sites disqus shortname 

		// check if dis
		if( shortname !== '' && typeof uvu != 'undefined' && typeof uvu.params != 'undefined' && uvu.params.url != 'undefined' && uvu.params.url !== '' && typeof uvu.params['post-comments'] != 'undefined' && uvu.params['post-comments'] == 'true' ){
			var disqus_config = function () {
				this.page.url = uvu.params.url;
				//this.page.identifier = uvu.params.id;
			};

			(function() { // DON'T EDIT BELOW THIS LINE
				var d = document, s = d.createElement('script');
				s.src = '//'+shortname+'.disqus.com/embed.js';
				s.setAttribute('data-timestamp', +new Date());
				(d.head || d.body).appendChild(s);
			})();
		}
	});
</script>