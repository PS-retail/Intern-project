import React from 'react';

import { useParams } from 'react-router';

const StoryPage = () => {
    const storyId = useParams().storyId;

    return (
        <div>
            Story of {storyId}
        </div>
    )
}

export default StoryPage;
