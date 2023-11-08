import { Suspense } from 'react'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Loading from '@/components/Loading/Loading'
import Header from '@/components/common/header/Header'
import NavigationBar from '@/components/common/navigationbar/NavigationBar'
import Layout from '@/components/layout/Layout.tsx'
import EditChildren from '@/pages/EditChildren/EditChildren'
import EditingChildren from '@/pages/EditChildren/EditingChildren'
import ErrorPage from '@/pages/ErrorPage'
import AcademyDashboard from '@/pages/academy/AcademyDashboard'
import FilterPage from '@/pages/filter/FilterPage.tsx'
import HomePage from '@/pages/home/HomePage'
import LoginPage from '@/pages/login/LoginPage'
import MapPage from '@/pages/map/MapPage.tsx'
import OnboardingPage from '@/pages/onboarding/OnbardingPage'
import SelectCity from '@/pages/selectcity/SelectCity.tsx'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <Suspense fallback={<Loading />}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <>
              <Header headerType={'Logo'} pageTitle={'아이 정보 한눈에 보기'} />
              <HomePage />
              <NavigationBar selectIcon={'Home'} />
            </>
          ),
          errorElement: <ErrorPage />
        },
        {
          path: 'login',
          element: <LoginPage />,
          errorElement: <ErrorPage />
        },
        {
          path: 'onboarding',
          element: (
            <>
              <Header headerType={'BackPush'} />
              <OnboardingPage />
            </>
          ),
          errorElement: <ErrorPage />
        },
        {
          path: 'edit/:childId',

          element: (
            <>
              <Header headerType={'Close'} backUrl={'/'} />
              <EditChildren />
            </>
          ),
          errorElement: <ErrorPage />
        },
        {
          path: 'edit/:childId/editing',
          element: (
            <>
              <Header headerType={'Close'} />
              <EditingChildren />
            </>
          )
        },
        {
          path: 'selectcity',
          element: (
            <>
              <Header headerType={'BackPush'} />
              <SelectCity />
            </>
          ),
          errorElement: <ErrorPage />
        },
        {
          path: 'map',
          element: (
            <>
              <Header headerType={'Logo'} pageTitle={'학원 지도'} />
              <MapPage />
              <NavigationBar selectIcon={'SearchMap'} />
            </>
          )
        },
        {
          path: 'map/filter',
          element: (
            <>
              <Header
                headerType={'CloseWithTitle'}
                pageTitle={'학원 필터 적용하기'}
              />
              <FilterPage />
            </>
          ),
          errorElement: <ErrorPage />
        },
        {
          path: 'schedule',
          element: <p>{'시간표 보기'}</p>,
          errorElement: <ErrorPage />
        },
        {
          path: 'academies',
          element: (
            <div>
              <Header headerType={'Logo'} pageTitle={'학원 관리하기'} />
              <AcademyDashboard />
              <NavigationBar selectIcon={'Info'} />
            </div>
          ),
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <p>{'학원 리스트 body'}</p>,
              errorElement: <ErrorPage />
            },
            {
              path: ':academiesId',
              element: <p>{'학원 상세보기'}</p>,
              errorElement: <ErrorPage />
            },
            {
              path: 'register',
              element: <p>{'학원 등록'}</p>,
              errorElement: <ErrorPage />
            }
          ]
        },
        {
          path: 'reports',
          element: <p>{'reports'}</p>,
          errorElement: <ErrorPage />
        },
        {
          path: 'settings',
          element: <p>{'setting page'}</p>,
          errorElement: <ErrorPage />
        },
        {
          path: 'myPages',
          element: <p>{'my page'}</p>,
          errorElement: <ErrorPage />
        }
      ]
    }
  ],
  { basename: '/' }
)
