import React from "react";
import Skeleton from "react-loading-skeleton";

export function SkeletonLoaderChart() {
  return (
    <>
      <div className="desctop-chart-home-skeleton center">
        <Skeleton count={1} circle={true} height={450} width={450} />
      </div>
      <div className="mobile-chart-home-skeleton center">
        <Skeleton count={1} circle={true} height={250} width={250} />
      </div>
    </>
  );
}

export function SkeletonLoaderHome() {
  return (
    <>
      <div className="row mt120 desctop-home-skeleton">
        <div className="col l7 m12 center">
          <Skeleton count={1} circle={true} height={450} width={450} />
        </div>
        <div className="col l4 m12 mt20">
          <Skeleton count={20} />
        </div>
      </div>

      <div className="row mt40 mobile-home-skeleton">
        <div className="col s12 center">
          <Skeleton count={1} circle={true} height={250} width={250} />
        </div>
        <div className="col s12 mt50">
          <Skeleton count={15} />
        </div>
      </div>
    </>
  );
}
