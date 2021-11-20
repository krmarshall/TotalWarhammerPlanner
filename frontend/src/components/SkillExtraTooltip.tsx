import { Fragment } from 'react';
import { ExtraTooltipInterface } from '../types/interfaces/SkillInterfaces';
import cooldownImg from '../assets/img/other/icon_cooldown_26.webp';
import windsImg from '../assets/img/other/winds_ui_replenish_battle_ph.webp';
import SkillEffect from './SkillEffect';

interface SkillExtraTooltipPropInterface {
  extraTooltip: ExtraTooltipInterface;
}

const SkillExtraTooltip = ({ extraTooltip }: SkillExtraTooltipPropInterface) => {
  return (
    <Fragment>
      <div className="flex flex-row ml-4">
        <h3 className="flex-grow text-left text-xl">{extraTooltip.title}</h3>
        {extraTooltip.windsCost && (
          <div className="flex flex-row">
            <img className="w-6 h-6" src={windsImg} alt="winds icon" width="24" height="24" />
            <div className="ml-1 flex flex-col justify-center">
              <p className="text-center">{extraTooltip.windsCost}</p>
            </div>
          </div>
        )}
        {extraTooltip.cooldown && (
          <div className="flex flex-row">
            <img className="w-6 h-6" src={cooldownImg} alt="cooldown icon" width="24" height="24" />
            <div className="ml-1 flex flex-col justify-center">
              <p className="text-center">{extraTooltip.cooldown}</p>
            </div>
          </div>
        )}
      </div>
      <h4 className="text-left italic ml-4">{extraTooltip.subTitle}</h4>
      {extraTooltip.type && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Type:</h5>
          <p>{extraTooltip.type}</p>
        </div>
      )}
      {extraTooltip.duration && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Duration:</h5>
          <p>{extraTooltip.duration}</p>
        </div>
      )}
      {extraTooltip.target && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Target:</h5>
          <p>{extraTooltip.target}</p>
        </div>
      )}
      {extraTooltip.projectileRange && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Projectile range:</h5>
          <p>{extraTooltip.projectileRange}</p>
        </div>
      )}
      {extraTooltip.effectRange && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Effect range:</h5>
          <p>{extraTooltip.effectRange}</p>
        </div>
      )}
      {extraTooltip.activeIf && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Active if:</h5>
          <p>{extraTooltip.activeIf}</p>
        </div>
      )}
      {extraTooltip.cannotUseIf && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Cannot use if:</h5>
          <p>{extraTooltip.cannotUseIf}</p>
        </div>
      )}
      {extraTooltip.cannotTargetIf && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Cannot target if:</h5>
          <p>{extraTooltip.cannotTargetIf}</p>
        </div>
      )}
      {extraTooltip.effects && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Effects:</h5>
          <div>
            {extraTooltip.effects.map((skillEffect, index) => {
              return <SkillEffect key={index} skillEffect={skillEffect} />;
            })}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default SkillExtraTooltip;
