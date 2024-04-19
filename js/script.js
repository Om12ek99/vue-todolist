// Test
console.log('Ciao');
// end test


const { createApp } = Vue;
createApp ({
    data() {
        return {
            task: [
                {
                    text: 'Recruiting blog post',
                    check: true,     
                },
                {
                    text: 'Mobile app launch',
                    check: true,     
                },
                {
                    text: 'Interview John H.',
                    check: true,     
                },
                {
                    text: 'Summit update to mobile storefront',
                    check: true,     
                }                
            ]
        };
    },
    created() {
    },
}).mount("#tasks");
