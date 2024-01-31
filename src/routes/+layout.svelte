<script>
	import "../app.css";
</script>

<main class="flex flex-col min-h-screen">
    <nav class="container mx-auto pt-2 flx flwx-wrap justify-between navbar bg-base-100">
        <h1 class="btn btn-ghost text-xl">
            Hello World
        </h1>
    </nav>
	<div class="container mx-auto p-8 grow">
		<slot />
	</div>
</main>
