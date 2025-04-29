<script>
	document.addEventListener('DOMContentLoaded', () => {
		const toggleBtn = document.getElementById('toggle-sidebar');
		const closeBtn = document.getElementById('close-sidebar');
		const sidebar = document.getElementById('sidebar');

		if (toggleBtn && sidebar) {
			toggleBtn.addEventListener('click', () => {
				sidebar.classList.toggle('show');
			});
		}

		if (closeBtn && sidebar) {
			closeBtn.addEventListener('click', () => {
				sidebar.classList.remove('show');
			});
		}
	});
</script>

