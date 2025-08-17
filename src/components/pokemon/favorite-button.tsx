import { Button } from 'antd'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@/lib/store'
import { toggleFavorite } from '@/lib/slices/favorites-slice'
import { memo, useCallback, useMemo } from 'react'

type Props = {
    pokemon: Pokemon
    size?: 'small' | 'middle' | 'large'
    className?: string
}

export const FavoriteButton = memo(function FavoriteButton({
    pokemon,
    size = 'middle',
    className = ''
}: Props) {
    const dispatch = useDispatch()
    const isFavorite = useSelector(
        (s: RootState) => s.favorites.items.some(p => p.id === pokemon.id)
    )

    const label = useMemo(
        () => (isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'),
        [isFavorite]
    )

    const handleClick = useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation()
            dispatch(toggleFavorite(pokemon))
        },
        [dispatch, pokemon]
    )

    return (
        <Button
            size={size}
            type="text"
            aria-pressed={isFavorite}
            aria-label={label}
            title={label}
            onClick={handleClick}
            className={
                'group !p-1 flex items-center justify-center transition ' +
                'hover:scale-110 active:scale-95 ' +
                (isFavorite ? 'opacity-100' : 'opacity-80 hover:opacity-100') +
                (className ? ` ${className}` : '')
            }
            icon={
                isFavorite ? (
                    <HeartFilled className="!text-red-500 drop-shadow-sm transition-colors" />
                ) : (
                    <HeartOutlined className="group-hover:!text-red-500 transition-colors" />
                )
            }
        />
    )
}) 