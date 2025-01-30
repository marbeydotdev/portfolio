<script lang="ts">
	import { fly } from 'svelte/transition';

	const services = [
		{
			name: 'Personal Website',
			description: 'Showcase your skills and experience with a sleek, professional site.'
		},
		{
			name: 'Business Website',
			description: 'Promote your company’s products and services with a high-quality website.'
		},
		{
			name: 'Custom Web Application',
			description: 'Get a tailored web solution to meet your unique needs.'
		},
		{
			name: 'Excel to Web Application',
			description: 'Upgrade from Excel to a modern, scalable web application.'
		},
		{
			name: 'E-commerce Website',
			description: 'Launch a secure and scalable online store with payment integration.'
		},
		{
			name: 'Website Redesign',
			description: 'Modernize your existing website with a fresh, user-friendly design.'
		},
		{
			name: 'SEO Optimization',
			description: 'Improve your search engine ranking and attract more organic traffic.'
		}
	];

</script>

<div class="flex flex-col gap-4">
	{#each services as service, index}
		<div in:fly|global={{y: 50, delay: index*100}} class="block p-8 rounded-xl bg-neutral-900">
			<span class="block font-semibold mb-2">{service.name}</span>
			<p>
				{service.description}
			</p>
		</div>
	{/each}
</div>


