import { UserProfile } from '@clerk/nextjs';

export default function ProfilePage() {
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <div style={{ height: '600px', overflowY: 'auto' }}>
        <UserProfile />
      </div>
    </div>
  );
}
