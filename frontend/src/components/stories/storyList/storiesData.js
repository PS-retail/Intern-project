
    const storiesData = [
        {
          id: 1,
          name: "Home Cinema Room",
          type: "AR-Story",
          productsIncluded:
                          [
                                {product: "Beo-Vision Eclipse", link: "",}
                          ],
          tagline: "Hear. See. Feel.",
          description: "The ultimate cinematic experience in your home. Hearing is believing. Because, when it’s played just right, sound has the incredible ability to transport you from your living room to a packed stadium, to the bottom of the ocean – or a galaxy far far away.",
          link: "https://ps-retail-cinema.glitch.me",
          photo: "https://images.ctfassets.net/8cd2csgvqd3m/s9pbbuvlalet34bdHQxAk/40b98758d25687c6eecb2ae52f02157b/L.jpg",
        },

        {
          id: 2,
          name: "House Party",
          type: "AR-Story",
          productsIncluded:
                          [
                                {product: "Beo-Lab 5", link: "",},
                                {product: "Beo-Sound 2", link: "",},
                                {product: "Beo-Sound Edge", link: "",},
                          ],
          tagline: "Amplify the Celebration. Clarify your Relaxation",
          description: "Working from home. Partying from Home. We have you covered. Turn a loud night in can become zen in a matter of seconds. ",
          link: "https://ps-retail-cinema.glitch.me",
          photo:"https://www.jebiga.com/wp-content/uploads/2016/04/Bang-Olufsen-Beoplay-A1-1.jpg",
        },

        {
          id: 3,
          name: "Day to Night Childcare",
          type: "AR-Story",
          productsIncluded:
                          [
                                {product: "Beo-Sound 2", link: "",}
                          ],
          tagline: "",
          description: "",
          link: "https://day2night.glitch.me",
          photo:"data:image/jpeg;base64,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",
        },

        {
          id: 4,
          name: "Beo-Sound Edge",
          type: "AR-Product",
          productsIncluded:
                          [
                                {product: "Beo-Sound Edge", link: "",}
                          ],
          tagline: "Sound revolution",
          description: "BeoSound Edge is a compact and powerful wireless speaker, which through magical interaction, timeless design and cutting-edge acoustic innovation, offers a mesmerising listening experience.",
          link: "https://beo-sound-edge-floorstand.glitch.me",
        },
        {
          id: 5,
          name: "Beo-Sound 2",
          type: "AR-Product",
          productsIncluded:
                          [
                                {product: "Beo-Sound 2", link: "",}
                          ],
          tagline: "Home is where the music is",
          description: "Powerful multiroom speaker sounding every bit as beautiful as it looks. Captivating no matter where you place it or how you use it.",
          link: "https://beo-sound2.glitch.me",
        },
        {
          id: 6,
          name: "Beo-Lab 50",
          type: "AR-Product",
          productsIncluded:
                          [
                                {product: "Beo-Lab 5", link: "",}
                          ],
          tagline: "The future of sound",
          description: "High-end active loudspeaker blending radical audio technology with graceful aesthetics and meticulous craftsmanship.",
          link: "https://beolab50.glitch.me",
        },

        {
          id: 7,
          name: "Beo-Vision Eclipse",
          type: "AR-Product",
          productsIncluded:
                          [
                                {product: "Beo-Vision Eclipse", link: "",}
                          ],
          tagline: "Crafted sound and design harmony",
          description: "With the world’s finest TV sound system, Beovision Eclipse TV is designed to integrate beautifully with your lifestyle.",
          link: "https://beo-vision-eclipse-floorstand.glitch.me",
        },
    ];

    export default storiesData
