import React, {ImgHTMLAttributes} from 'react';
import emptyAvatar from '../../../../static/images/emptyAvatar.png';

type Props = ImgHTMLAttributes<unknown> & {
    isEditable?: boolean
};

export const Avatar: React.FC<Props> = (
    {
        isEditable,
        ...restProps
    },
) => (
    isEditable
        ? (
            <input
                {...restProps}
                type='image'
                alt='ava'
            >
                <form id="my-avatar-form">
                    <input
                        name="avatar"
                        type="file"
                        accept="image/*"
                        id="my-avatar"
                        style={{display: 'none'}}
                    />
                    <input
                        id="upload-my-avatar"
                        type="submit"
                    />
                </form>
            </input>
        )
        : (
            <img src={emptyAvatar} alt='ava'/>
        )
);