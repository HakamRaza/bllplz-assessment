import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Difference() {

    return (
        <>
            <Head title="saved vs afterCommit 🤔" />
        
            <div className="bg-gray-900 text-white min-h-screen py-8">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-4">Question 4</h1>

                    <p className="text-gray-400 mb-8">
                        What is the difference between saved VS afterCommit ?
                        (Laravel)
                    </p>

                    <p className="text-gray-400 mb-4">
                        - There are 9 files occurances of 'afterCommit' in Laravel 11.x 
                        core as follows:
                    </p>

                    <div className="mt-8 bg-gray-800 shadow-md rounded-md overflow-hidden">
                        <div className="p-4 border-b border-gray-700">
                            <pre className="overflow-x-auto">
                                <code className="language-txt">
                                    {`src/Illuminate/Broadcasting/BroadcastEvent.php:
63          $this->backoff = property_exists($event, 'backoff') ? $event->backoff : null;
64:         $this->afterCommit = property_exists($event, 'afterCommit') ? $event->afterCommit : null;
65          $this->maxExceptions = property_exists($event, 'maxExceptions') ? $event->maxExceptions : null;

src/Illuminate/Bus/Queueable.php:
38       */
39:     public $afterCommit;
40  

147       */
148:     public function afterCommit()
149      {
150:         $this->afterCommit = true;
151  

161      {
162:         $this->afterCommit = false;
163  

src/Illuminate/Database/Concerns/ManagesTransactions.php:
342       */
343:     public function afterCommit($callback)
344      {

src/Illuminate/Database/Eloquent/BroadcastableModelEventOccurred.php:
53       */
54:     public $afterCommit;
55  

src/Illuminate/Events/Dispatcher.php:

564      {
565:         return (($listener->afterCommit ?? null) ||
566:                 $listener instanceof ShouldHandleEventsAfterCommit) &&
567                  $this->resolveTransactionManager();

576       */
577:     protected function createCallbackForListenerRunningAfterCommits($listener, $method)
578      {

665  
666:             if ($listener instanceof ShouldQueueAfterCommit) {
667:                 $job->afterCommit = true;
668              } else {
669:                 $job->afterCommit = property_exists($listener, 'afterCommit') ? $listener->afterCommit : null;
670              }

src/Illuminate/Foundation/Bus/PendingDispatch.php:
107       */
108:     public function afterCommit()
109      {
110:         $this->job->afterCommit();
111  

src/Illuminate/Mail/SendQueuedMailable.php:
8  use Illuminate\Contracts\Queue\ShouldBeEncrypted;
9: use Illuminate\Contracts\Queue\ShouldQueueAfterCommit;
10  use Illuminate\Queue\InteractsWithQueue;

60  
61:         if ($mailable instanceof ShouldQueueAfterCommit) {
62:             $this->afterCommit = true;
63          } else {
64:             $this->afterCommit = property_exists($mailable, 'afterCommit') ? $mailable->afterCommit : null;
65          }

src/Illuminate/Notifications/SendQueuedNotifications.php:

85:         if ($notification instanceof ShouldQueueAfterCommit) {
86:             $this->afterCommit = true;
87          } else {
88:             $this->afterCommit = property_exists($notification, 'afterCommit') ? $notification->afterCommit : null;
89          }

src/Illuminate/Queue/Queue.php:

358  
359:         if (! $job instanceof Closure && is_object($job) && isset($job->afterCommit)) {
360:             return $job->afterCommit;
361          }
362 `}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <p className="text-gray-400 mt-8">
                        - While, there are 3 files occurance of 'saved' :
                    </p>

                    <div className="mt-8 bg-gray-800 shadow-md rounded-md overflow-hidden">
                        <div className="p-4 border-b border-gray-700">
                            <pre className="overflow-x-auto">
                                <code className="language-txt">
                                {`src/Illuminate/Database/Eloquent/Model.php:
1133          if ($this->exists) {
1134:             $saved = $this->isDirty() ?
1135                  $this->performUpdate($query) : true;

1141          else {
1142:             $saved = $this->performInsert($query);
1143  

1149  
1150:         // If the model is successfully saved, we need to do a few more things once
1151:         // that is done. We will call the "saved" method here to run any actions
1152:         // we need to happen after a model gets successfully saved right here.
1153:         if ($saved) {
1154              $this->finishSave($options);

1156  
1157:         return $saved;
1158      }

1173      /**
1174:      * Perform any actions that are necessary after the model is saved.
1175       *

1180      {
1181:         $this->fireModelEvent('saved', false);
1182  

src/Illuminate/Database/Eloquent/Concerns/HasEvents.php:
126                  'retrieved', 'creating', 'created', 'updating', 'updated',
127:                 'saving', 'saved', 'restoring', 'restored', 'replicating',
128                  'deleting', 'deleted', 'forceDeleting', 'forceDeleted',

279      /**
280:      * Register a saved model event with the dispatcher.
281       *

284       */
285:     public static function saved($callback)
286      {
287:         static::registerModelEvent('saved', $callback);
288      }

src/Illuminate/Database/Eloquent/Concerns/HasRelationships.php:
738              if ($this->$relation instanceof self) {
739:                 $this->$relation->fireModelEvent('saved', false);
740  
`}
                                </code>
                            </pre>
                        </div>
                    </div>


                    <p className="text-gray-400 mt-8">
                        - I would be assuming we will discussing on the database operation. Thefore 'saved' 
                        may referring to eloquent event that are being broadcast by Laravel after a row has been
                        updated or created in a model or table through eloquent.
                    </p>
                    <p className="text-gray-400 mt-4">
                        - This broadcasted event can be listened or used to trigger Observer class to execute some side
                        effects at 'saved' function method
                    </p>
                    <p className="text-gray-400 mt-4">
                        - 'Commit' is being refer more towards database operation side where it involve transactions.
                        A transaction can be assume as a set (single or many) of operation in database. 'Commit' 
                        happen at the end when the whole set of these operation is executed successfully without fault 
                        indicating the transaction finished.
                    </p>
                    <p className="text-gray-400 mt-4">
                        - As commit act at the database operation layer, it does not involve eloquent as well as event
                        broadcasting, but 'saved' require 'commit'
                    </p>
                    <p className="text-gray-400 mt-4">
                        - A callback function can also be execute as side effect when 'commit' occured.
                    </p>
                    <p className="text-gray-400 mt-4">
                        - Here 'afterCommit' mostly used to 
                    </p>
                    <p className="text-gray-400 mt-2">
                        ▪ act as a indicator (boolean) to indicate commit happened before executing any side effects configured or 
                    </p>
                    <p className="text-gray-400 mt-2">
                        ▪ do execute or withold some functionality when commit happened
                    </p>
                </div>

            </div>
        </>
    );
}