<template>
	<div>
		<!-- Check if the route starts with '/m' for mobile -->
	    <div v-if="isMobileLayout">
	      <VApp>
	        <VMain>
	          <slot />
	          <!-- This will only be included if it's a mobile route and not an excluded one -->
	          <MobileSiteLayoutsBottomNavigation />
	        </VMain>
	      </VApp>
	    </div>
		<!-- Default layout for desktop -->
		<div v-else>
			<VApp>
				<main>
					<slot />
				</main>
			</VApp>
		</div>
	</div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// Define the interface for the route if necessary
interface Route {
	path: string;
}

// Use the `useRoute` composable to access the current route
const route = useRoute();

// List of paths to exclude the mobile bottom navigation
const excludedPaths = ['/m/login', '/m/register', '/m/forgot-password'];

// Computed property to check if the current route is a mobile layout and not an excluded path
const isMobileLayout = computed((): boolean => {
	return route.path.startsWith('/m') && !excludedPaths.includes(route.path);
});
</script>