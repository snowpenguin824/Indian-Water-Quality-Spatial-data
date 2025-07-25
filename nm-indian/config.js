var config = {
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    accessToken: '',
    showMarkers: true,
    theme: 'dark',
    use3dTerrain: true,
    title: 'Tribal/Pueblo Drinking Water Challenges in New Mexico',
    subtitle: 'Review of Current Treatment Technology, Development of A Tool Assist in Meeting Tribal/Pueblo Water Treatment Challenge',
    byline: 'Grace Zhao, Amanda Qiao, Western Knudsen, Xuehua Bai',
    footer: '',
    chapters: [
        {
            id: 'introduction-00',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<embed type="text/html" src="https://nm-indian-tribe-water.s3.amazonaws.com/index.html" width="100%" height="1000">',
            location: {
                center: [-106.62946, 35.10595],
                zoom: 7.7,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.3, 
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        
        // {
        //     id: 'introduction-01',
        //     alignment: 'right',
        //     hidden: true,
        //     title: 'New Mexico Indian Tribe Water Infrastructure',
        //     image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/Introduction/IMG_2565.JPG',
        //     description: 'In New Mexico, groundwater delivers up to XX% of the public water supply. In sparsely populated tribes where the cost-to-benefit ratio makes it challenging to develop water infrastructure, groundwater are the most important water sources. However, tribal lands are especially affected by the risk of drinking contaminated water, and in many cases testing is absent altogether.  ',
        //     location: {
        //         center: [-106.62946, 35.10595],
        //         zoom: 7.7,
        //         pitch: 30,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: '',
        //             opacity: 0.3, 
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: '',
        //             opacity: 0
        //         }
        //     ]
        // },
        {
            id: 'introduction-02',
            alignment: 'right',
            title: 'New Mexico Indian Tribe Water Infrastructure',
            image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/Introduction/5f91eb9ef110558f27fda9af.webp',
            description: 'Groundwater makes up about 87% of New Mexico public water supply, and about 78% of New Mexicans rely on groundwater for drinking water. In addition, over 170,000 New Mexicans depend on private wells for drinking water. In sparsely populated tribes where the cost-to-benefit ratio makes it challenging to develop water infrastructure, groundwater are the most important water sources. However, tribal lands are especially affected by the risk of drinking contaminated water, and in many cases testing is absent altogether.  ',
            location: {
                center: [-106.62946, 35.10595],
                zoom: 7.7,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.3, 
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Jemez Pueblo',
            alignment: 'right',
            title: 'Jemez Pueblo',
            image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/jemex/IMG_2575.JPG',
            description: 'Jemez Pueblo’s water previously has slightly higher arsenic levels than allowed under a recently changed clean water law. Arsenic, manganese, and iron in Pueblo water has resulted in poor-tasting, rust-colored water that stained clothing and tasted unpleasant. These troubles has been bothering those in the community for years. Jemez employed Yardney Filtration System to remove ascenic, iron and manganese.',
            location: {
                center: [-106.72475, 35.60994],
                zoom: 14.22,
                pitch: 0,
                bearing: 66.3
            },
            onChapterEnter: [
                {
                    layer: 'phl-bike-network',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'Jemez Pueblo',
            alignment: 'right',
            title: 'Jemez Pueblo',
            image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/jemex/IMG_2610.JPG',
            description: 'Jemez Pueblo’s water previously had slightly higher arsenic levels than allowed under a recently changed clean water law. Arsenic, manganese, and iron in Pueblo water has resulted in poor-tasting, rust-colored water that stained clothing and tasted unpleasant. These troubles bothered those in the community for years. Jemez employs Yardney Filtration System to remove ascenic, iron and manganese.',
            location: {
                center: [-106.72475, 35.60994],
                zoom: 14.22,
                pitch: 0,
                bearing: 66.3
            },
            onChapterEnter: [
                {
                    layer: 'phl-bike-network',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'Jemez Pueblo',
            alignment: 'right',
            title: 'Jemez Pueblo',
            image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/jemex/IMG_2732.JPG',
            description: 'Summer interns took water sample from the well.',
            location: {
                center: [-106.72475, 35.60994],
                zoom: 14.22,
                pitch: 0,
                bearing: 66.3
            },
            onChapterEnter: [
                {
                    layer: 'phl-bike-network',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'Jemez Pueblo',
            alignment: 'right',
            title: 'Jemez Pueblo',
            image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/water-data/Jemez-data.png',
            description: 'Raw Water Quality Data',
            location: {
                center: [-106.72475, 35.60994],
                zoom: 14.22,
                pitch: 0,
                bearing: 66.3
            },
            onChapterEnter: [
                {
                    layer: 'phl-bike-network',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'Zuni Pueblo',
            alignment: 'right',
            title: 'Zuni Pueblo',
            image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/zuni/Photo+Apr+25+2023%2C+11+03+32+AM.jpg',
            description: '',
            location: {
                center: [-108.85032, 35.06938],
                zoom: 13.15,
                pitch: 45,
                bearing: 66.3
            },
            onChapterEnter: [
                {
                    layer: 'indego-stations',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'indego-stations',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Zuni Pueblo',
            alignment: 'right',
            title: 'Zuni Pueblo',
            image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/water-data/zuni-data.png',
            description: 'Raw Water Quality Data',
            location: {
                center: [-108.85032, 35.06938],
                zoom: 13.15,
                pitch: 45,
                bearing: 66.3
            },
            onChapterEnter: [
                {
                    layer: 'indego-stations',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'indego-stations',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Zia Pueblo',
            alignment: 'right',
            title: 'Zia Pueblo',
            image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/zia/2024-06-17+10.23.55.jpg',
            description: 'The water from these sources varies in quality, with higher concentrations of dissolved solids found in the alluvium along the southeastern part of the Jemez River valley compared to the Santa Fe aquifer. The quality of water from the Morrison Formation is noted to be moderately saline, with high specific conductance and dissolved-solids concentration. Samples were collected from Borrego Well combined, Chamisa and Mescalero Nogal well sites. The system employs standard filtration and chemical treatment processes.',
            location: {
                center: [-106.72166, 35.50614],
                zoom: 14.99,
                pitch: 44.00,
                bearing: 65
            },
            onChapterEnter: [
                {
                    layer: 'belmont',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'belmont',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Zia Pueblo',
            alignment: 'right',
            title: 'Zia Pueblo',
            image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/water-data/zia-data.png',
            description: 'Raw Water Quality Data',
            location: {
                center: [-106.72166, 35.50614],
                zoom: 14.99,
                pitch: 44.00,
                bearing: 65
            },
            onChapterEnter: [
                {
                    layer: 'belmont',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'belmont',
                    opacity: 0
                }
            ]
        },

        {
            id: 'Nambe Pueblo',
            alignment: 'right',
            title: 'Nambe Pueblo',
            image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/nambe/IMG_2879.JPG',
            description: 'Treatment processes consist of Buffalo Well, a pump station and two each 17-ft-diameter, 24-ft-tall water storage tanks. Groundwater was pumped through Iron based Arsenic adsorption media along with pH adjustment and disinfection process.  Liquid chlorine was added to maintain a residual chlorine in the water storage tank and distribution system. The system typically operated intermittently for several hours each day.',
            location: {
                center: [-105.96499, 35.88767],
                zoom: 14.99,
                pitch: 44.00,
                bearing: 65
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Nambe Pueblo',
            alignment: 'right',
            title: 'Nambe Pueblo',
            image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/nambe/IMG_2958.JPG',
            description: 'Nambe Ion Exchange System',
            location: {
                center: [-105.96499, 35.88767],
                zoom: 14.99,
                pitch: 44.00,
                bearing: 65
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Nambe Pueblo',
            alignment: 'right',
            title: 'Nambe Pueblo',
            image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/nambe/IMG_2985.JPG',
            description: 'Nambe Ion Exchange System',
            location: {
                center: [-105.96499, 35.88767],
                zoom: 14.99,
                pitch: 44.00,
                bearing: 65
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Nambe Pueblo',
            alignment: 'right',
            title: 'Nambe Pueblo',
            image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/water-data/nambe-data.png',
            description: 'Raw Water Quality Data',
            location: {
                center: [-105.96499, 35.88767],
                zoom: 14.99,
                pitch: 44.00,
                bearing: 65
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Acoma Pueblo',
            alignment: 'right',
            title: 'Acoma Pueblo',
            image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/acoma/2024-06-20+09.30.32.jpg',
            description: 'The system employs standard filtration and chemical treatment processes, with additional monitoring for methane levels to ensure public health safety.',
            location: {
                center: [-107.58243, 34.89602],
                zoom: 16,
                pitch: 44.00,
                bearing: 65
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Acoma Pueblo',
            alignment: 'right',
            title: 'Acoma Pueblo',
            image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/water-data/acoma-data.png',
            description: 'Raw Water Quality Data',
            location: {
                center: [-107.58243, 34.89602],
                zoom: 16,
                pitch: 44.00,
                bearing: 65
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Mescalero Apache',
            alignment: 'right',
            title: 'Mescalero Apache',
            image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/mescalero/IMG_0033.JPG',
            description: '',
            location: {
                center: [-105.77200, 33.15519],
                zoom: 14,
                pitch: 44.00,
                bearing: 65
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Mescalero pueblo',
            alignment: 'right',
            title: 'Mescalero Apache',
            image: 'https://nm-indian-tribe-storymap.s3.amazonaws.com/water-data/mescalero.png',
            description: 'Raw Water Quality Data',
            location: {
                center: [-105.77200, 33.15519],
                zoom: 14,
                pitch: 44.00,
                bearing: 65
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        }
    ]
};
