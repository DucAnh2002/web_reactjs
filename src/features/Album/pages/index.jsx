import React from 'react';
import PropTypes from 'prop-types';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Chill Tâm Trạng Buồn',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/6/c/d/56cd9130ab4c54b3d3e74ec6d656ea04.jpg'
        },
        {
            id: 2,
            name: 'Accoutis Thư Giãn',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg'
        },


        {
            id: 3,
            name: 'Nhạc Vàng Hay Nhất',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/7/2/1/772144a856471d81aaf7a0991b260fea.jpg'
        },
        {
            id: 4,
            name: 'Rap Việt Cực Chất',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/9/a/2/49a25321998ecf7d01d6033ba505be27.jpg'
        },

        {
            id: 5,
            name: 'Lofi Hits',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/0/0/d/900d29d81f4ab570c451fec9ae384f55.jpg'
        }
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <albumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;