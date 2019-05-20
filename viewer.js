viewer = pannellum.viewer('panorama', {
    "default": {
        "autoLoad": true,
        "autoRotate": 5,
        "autoRotateInactivityDelay": 2000,
        "firstScene": "01",
        "sceneFadeDuration": 1000,
        "showControls": false
    },
    "scenes": {
        "01": {
            "title": "01",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "360-1.jpg",
            "hotSpots": [{
                "pitch": -2.1,
                "yaw": 132.9,
                "type": "scene",
                "text": "02",
                "sceneId": "02"
            },
            {
                "pitch": -5,
                "yaw": 50,
                "type": "scene",
                "text": "03",
                "sceneId": "03"
            },
            {
                "pitch": 8,
                "yaw": 55,
                "type": "scene",
                "text": "04",
                "sceneId": "04",
            }]
        },
        "02": {
            "title": "02",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "360-2.jpg",
            "hotSpots": [{
                "pitch": -0.6,
                "yaw": 37.1,
                "type": "scene",
                "text": "01",
                "sceneId": "01",
                "targetYaw": -23,
                "targetPitch": 2
            },
            {
                "pitch": -2,
                "yaw": 60,
                "type": "scene",
                "text": "03",
                "sceneId": "03",
                "targetYaw": -23,
                "targetPitch": 2
            },
            {
                "pitch": 8,
                "yaw": 55,
                "type": "scene",
                "text": "04",
                "sceneId": "04",
                "targetYaw": -23,
                "targetPitch": 2
            }]
        },
        "03": {
            "title": "03",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "360-3.jpg",
            "hotSpots": [{
                "pitch": -0.6,
                "yaw": 37.1,
                "type": "scene",
                "text": "01",
                "sceneId": "01",
                "targetYaw": -23,
                "targetPitch": 2
            },
            {
                "pitch": 5,
                "yaw": 40,
                "type": "scene",
                "text": "02",
                "sceneId": "02",
                "targetYaw": -23,
                "targetPitch": 2
            },
            {
                "pitch": 8,
                "yaw": 55,
                "type": "scene",
                "text": "04",
                "sceneId": "04",
                "targetYaw": -23,
                "targetPitch": 2
            }]
        },
        "04": {
            "title": "04",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "360-4.jpg",
            "hotSpots": [{
                "pitch": -0.6,
                "yaw": 37.1,
                "type": "scene",
                "text": "01",
                "sceneId": "01",
                "targetYaw": -23,
                "targetPitch": 2
            },
            {
                "pitch": 5,
                "yaw": 40,
                "type": "scene",
                "text": "02",
                "sceneId": "02",
                "targetYaw": -23,
                "targetPitch": 2
            },
            {
                "pitch": 8,
                "yaw": 55,
                "type": "scene",
                "text": "03",
                "sceneId": "03",
                "targetYaw": -23,
                "targetPitch": 2
            }]
        }
    }
});