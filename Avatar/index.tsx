import { FC, HTMLAttributes, useMemo } from "react"
import {
  applyAvatarStyle,
  avatarImgStyle,
} from "@/illa-public-component/Avatar/style"
import { getColorByString } from "@/utils/colorHelper"

interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  avatarUrl?: string
  id?: string
  name?: string
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { avatarUrl, id, name, className, ...otherProps } = props

  const { avatarBgColor, avatarText, emptyStatus } = useMemo(() => {
    return {
      avatarBgColor: avatarUrl ? "#ffffff" : getColorByString(id || ""),
      avatarText: name?.substring?.(0, 1).toUpperCase() || "U",
      emptyStatus: !avatarUrl && !name,
    }
  }, [id, name, avatarUrl])

  return (
    <div
      className={className}
      css={applyAvatarStyle(avatarBgColor, emptyStatus)}
      {...otherProps}
    >
      {avatarUrl ? (
        <img css={avatarImgStyle} src={avatarUrl} alt="avatar" />
      ) : (
        avatarText
      )}
    </div>
  )
}

Avatar.displayName = "Avatar"
