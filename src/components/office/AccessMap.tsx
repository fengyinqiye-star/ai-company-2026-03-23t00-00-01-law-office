import { officeInfo } from '@/data/officeInfo';

export default function AccessMap() {
  return (
    <div>
      <div className="rounded-lg overflow-hidden border border-gray-200 aspect-video">
        <iframe
          src={officeInfo.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="事務所所在地の地図"
        />
      </div>

      <div className="mt-6">
        <h3 className="font-serif text-lg font-bold text-navy mb-3">
          アクセス
        </h3>
        <p className="text-sm text-gray-500 mb-2">
          <span className="font-semibold text-gray-700">最寄り駅:</span>{' '}
          {officeInfo.access.station}
        </p>
        <p className="text-sm text-gray-500 leading-relaxed">
          {officeInfo.access.directions}
        </p>
      </div>
    </div>
  );
}
