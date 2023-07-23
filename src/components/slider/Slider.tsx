import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { SliderContainer } from './Slider.styles'
import Slide1 from '@/assets/slideImages/slide1.jpg'
import Slide1hd from '@/assets/slideImages/slide1hd.jpg'
import Slide2 from '@/assets/slideImages/slide2.jpg'
import Slide2hd from '@/assets/slideImages/slide2hd.jpg'
import Slide3 from '@/assets/slideImages/slide3.jpg'
import Slide3hd from '@/assets/slideImages/slide3hd.jpg'
import Slide4 from '@/assets/slideImages/slide4.jpg'
import Slide4hd from '@/assets/slideImages/slide4hd.jpg'
import Slide5 from '@/assets/slideImages/slide5.jpg'
import Slide5hd from '@/assets/slideImages/slide5hd.jpg'
import Slide6 from '@/assets/slideImages/slide6.jpg'
import Slide6hd from '@/assets/slideImages/slide6hd.jpg'

export function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      loop: true,
    },
    [
      slider => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )

  return (
    <SliderContainer>
      <div className="navigation-wrapper">
        <div
          ref={sliderRef}
          className="keen-slider"
        >
          <div className="keen-slider__slide number-slide1">
            <img
              srcSet={`${Slide1} 640w, ${Slide1hd} 1832w`}
              sizes="(max-width: 1920px) 640px, 1832px"
              src={Slide1}
              alt=""
            />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img
              srcSet={`${Slide2} 640w, ${Slide2hd} 1920w`}
              sizes="(max-width: 1920px) 640px, 1920px"
              src={Slide2}
              alt=""
            />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img
              srcSet={`${Slide3} 640w, ${Slide3hd} 1920w`}
              sizes="(max-width: 1920px) 640px, 1920px"
              src={Slide3}
              alt=""
            />
          </div>
          <div className="keen-slider__slide number-slide4">
            <img
              srcSet={`${Slide4} 640w, ${Slide4hd} 1920w`}
              sizes="(max-width: 1920px) 640px, 1920px"
              src={Slide4}
              alt=""
            />
          </div>
          <div className="keen-slider__slide number-slide5">
            <img
              srcSet={`${Slide5} 640w, ${Slide5hd} 1920w`}
              sizes="(max-width: 1920px) 640px, 1920px"
              src={Slide5}
              alt=""
            />
          </div>
          <div className="keen-slider__slide number-slide6">
            <img
              srcSet={`${Slide6} 640w, ${Slide6hd} 1920w`}
              sizes="(max-width: 1920px) 640px, 1920px"
              src={Slide6}
              alt=""
            />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map(idx => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={'dot' + (currentSlide === idx ? ' active' : '')}
                ></button>
              )
            })}
          </div>
        )}
      </div>
    </SliderContainer>
  )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabeld = props.disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
