const app = Vue.createApp({
    data() {
        return {
            message: '',
            theme: 'light'
        };
    },

    mounted() {
        const saved = localStorage.getItem('markdownText');

        if (saved) {
            this.message = saved;
        }

        const savedTheme = localStorage.getItem('theme');

        this.theme = savedTheme || 'light';

        document.documentElement.setAttribute('data-bs-theme', newTheme);
    },

    computed: {
        htmlOutput() {
            return marked.parse(this.message);
        },

        charCount() {
            return (this.htmlOutput.replace(/<[^>]*>/g, '')).length;
        },

        themeIcon() {
            return this.theme === 'dark' ? 'light_mode' : 'dark_mode';
        }
    },

    watch: {
        message(newValue) {
            localStorage.setItem('markdownText', newValue);
        },

        theme(newTheme) {
            localStorage.setItem('theme', newTheme);

            document.documentElement.setAttribute('data-bs-theme', newTheme);
        }
    },

    methods: {
        toggleTheme() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark';
        }
    }
});

app.mount('#app');



