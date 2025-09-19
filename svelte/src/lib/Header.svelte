<script lang="ts">
    import { page } from '$app/stores'
</script>

<nav class="navbar bg-gray-100 dark:bg-gray-700 dark:text-white border-b border-black/15 dark:border-white/15">
    <!-- Logo -->
    <a href="/" class="logo">
        <img src="/logo.svg" alt="Logo" />
    </a>

    <!-- Links -->
    <ul class="nav-links">
        <li><a href="/" class={$page.url.pathname === '/' ? 'active' : ''}>Home</a></li>
        <li><a href="/models" class={$page.url.pathname.startsWith('/models') ? 'active' : ''}>Jetzt konfigurieren</a></li>
    </ul>
</nav>

<style>
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.75rem 1.5rem;
    }

    .logo img {
        height: 36px;
    }

    .nav-links {
        display: flex;
        gap: 1.5rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .nav-links a {
        text-decoration: none;
        font-weight: 500;
    }

    .nav-links a:hover {
        color: #60a5fa;
    }

    .active {
        border-bottom: 2px solid #60a5fa;
    }

    /* Mobile: alles untereinander stapeln (optional, falls du willst) */
    @media (max-width: 640px) {
        .navbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }
    }
</style>
